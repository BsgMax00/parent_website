import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import "moment/locale/nl-be"
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { InvoiceContext } from '../../Contexts/InvoiceContext';
import CalendarInvoice from '../../Classes/CalendarInvoice';

moment.locale("nl-be")
const localizer = momentLocalizer(moment)

const CalenderBody = () => {
    const { invoiceData } = useContext(InvoiceContext)
    const [ calendarData, setCalendarData ] = useState([]);

    const convertToCalendarData = () => {
        const data = [...invoiceData];
        const convertedCalendarData = data.map(data => new CalendarInvoice(data.id, data.InvoiceName, new Date(data.InvoiceDate), true))

        return convertedCalendarData;
    }

    useEffect(() => {
        setCalendarData(convertToCalendarData())
    }, [invoiceData])

    return (
        <>
            <div className="card rounded mt-0 m-2 h-100">
                <div className="card-body shadow-lg">
                    <Calendar
                        defaultDate={new Date()}
                        localizer={localizer}
                        events={calendarData}
                        startAccessor="start"
                        endAccessor="end"
                        views={["month", "agenda"]}
                        defaultView="month"
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
                            noEventsInRange: 'Geen gebeurtenissen in deze periode.',
                        }}
                        toolbar={true}
                    />
                </div>
            </div>
        </>
    )
}

export default CalenderBody;