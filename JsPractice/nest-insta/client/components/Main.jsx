import { useEffect } from 'react';
import axios from 'axios';

const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo';

const Main = () => {

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get(url);

        console.log('date: ', data);
      } catch(e) {
        console.error(e);
      }
    })()
  }, []);

  return (
    <div>
      Main
    </div>
  )
};

export { Main }