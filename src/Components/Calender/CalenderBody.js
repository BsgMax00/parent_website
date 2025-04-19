import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "moment/locale/nl-be";
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InvoiceContext } from '../../Contexts/InvoiceContext';
import CalendarInvoice from '../../Classes/CalendarInvoice';

moment.locale("nl-be")
const localizer = momentLocalizer(moment)

const CalenderBody = () => {
    const { invoiceData, convertDate } = useContext(InvoiceContext)
    const [ calendarData, setCalendarData ] = useState([]);
    const navigate = useNavigate();

    const convertToCalendarData = () => {
        const data = [...invoiceData];
        const convertedCalendarData = data.map(data => new CalendarInvoice(data.invoiceId, data.invoiceName, convertDate(data.invoiceDate), true))
        return convertedCalendarData;
    }

    useEffect(() => {
        setCalendarData(convertToCalendarData())
        // eslint-disable-next-line
    }, [invoiceData])

    return (
        <>
            <div className="card rounded mt-0 m-2 h-100">
                <div className="card-body shadow-lg">
                    <Calendar
                        localizer={localizer}
                        events={calendarData}
                        onSelectEvent={(event) => navigate(`/facturen/${event.id}`)}
                        views={["month", "agenda"]}
                        toolbar={true}
                        messages={{
                            today: 'Vandaag',
                            previous: 'Vorige',
                            next: 'Volgende',
                            month: 'Maand',
                            week: 'Week',
                            day: 'Dag',
                            agenda: 'Agenda',
                            date: 'Datum',
                            time: 'Tijd',
                            event: 'Gebeurtenis',
                            noEventsInRange: 'Geen gebeurtenissen in deze periode.'
                        }}
                        startAccessor="start"
                        endAccessor="end"
                        defaultView="month"
                        defaultDate={new Date()}
                    />
                </div>
            </div>
        </>
    )
}

export default CalenderBody;