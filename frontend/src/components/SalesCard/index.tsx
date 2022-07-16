import NotificationButton from "../NotificationButton";
import DatePicker, { registerLocale } from "react-datepicker";
import br from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
import { Sale } from "../../models/sale";
import { BASE_URL } from "../../utils/request";
import { useEffect, useState } from "react";
import axios from "axios";

function SalesCard() {
  registerLocale("br", br);
  const min = new Date(new Date().setDate(new Date().getDate() - 365));

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(new Date());

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {

    const dmin = minDate.toISOString().slice(0,10);
    const dmax = maxDate.toISOString().slice(0,10);
    console.log(dmin)
    axios.get(`${BASE_URL}/sales?minDate=${dmin}&maxDate=${dmax}`)
      .then((response) => {
        setSales(response.data.content);
    });
  }, [minDate, maxDate]);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            locale="br"
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            locale="br"
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>

      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              return (
                <tr key={sale.id}>
                  <th className="show992">{sale.id}</th>
                  <th className="show576">{new Date(sale.date).toLocaleDateString()}</th>
                  <th>{sale.sellerName}</th>
                  <th className="show992">{sale.visited}</th>
                  <th className="show992">{sale.deals}</th>
                  <th>R$ {sale.amount.toFixed(2)}</th>
                  <th>
                    <div className="dsmeta-red-btn-container">
                      <NotificationButton />
                    </div>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
