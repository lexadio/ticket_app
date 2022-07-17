import Header from './components/header';
import Ticket from './components/ticket';
import FilterCompany from './components/filter-company';
import FilterTransfer from './components/filter-transfer';
import AviaFilter from './components/avia-filter';


function App() {
  return (
    <div>  
        <Header></Header>
        <div className="container main-container">
            <section className="section-filter">
                <FilterTransfer />
                <FilterCompany />
            </section>

            <section className="section-avia">
                <AviaFilter />

                <section className="main-tikets">
                    <Ticket />
                    <Ticket />
                    <Ticket />
                    <Ticket />
                    <Ticket />

                    <button className="tikets-button">Показать еще 5 билетов</button>

                </section>
            </section>
        </div>
        </div>
  );
}

export default App;
