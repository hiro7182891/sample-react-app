// import Axios from "axios";
import './App.css';
import NewReceipt from './NewReceipt';
import ReceiptTable from './ReceiptTable';

function App() {
  return (
    <div>

      <header>
        <NewReceipt />
      </header>
      
      <main>
        <ReceiptTable />
      </main>

      {/* <button onClick={() => {
        Axios
            .get('http://127.0.0.1:8000/api/execute')
            .then(response => {
                console.log(response.data);
            }).catch(() => {
                console.log('通信に失敗しました');
            });

      }}>Click!</button> */}
    </div>
  );
}

export default App;
