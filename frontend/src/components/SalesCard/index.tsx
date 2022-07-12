import NotificationButton from "../NotificationButton";
import DatePicker, { registerLocale } from "react-datepicker";
import br from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";
registerLocale("br", br);

function SalesCard() {
  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            locale="br"
            selected={new Date()}
            onChange={(date: Date) => {}}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            locale="br"
            selected={new Date()}
            onChange={(date: Date) => {}}
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
            <tr>
              <th className="show992">#341</th>
              <th className="show576">08/07/2022</th>
              <th>Anakin</th>
              <th className="show992">15</th>
              <th className="show992">11</th>
              <th>R$ 55300.00</th>
              <th>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </th>
            </tr>
            <tr>
              <th className="show992">#341</th>
              <th className="show576">08/07/2022</th>
              <th>Anakin</th>
              <th className="show992">15</th>
              <th className="show992">11</th>
              <th>R$ 55300.00</th>
              <th>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </th>
            </tr>
            <tr>
              <th className="show992">#341</th>
              <th className="show576">08/07/2022</th>
              <th>Anakin</th>
              <th className="show992">15</th>
              <th className="show992">11</th>
              <th>R$ 55300.00</th>
              <th>
                <div className="dsmeta-red-btn-container">
                  <NotificationButton />
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;
