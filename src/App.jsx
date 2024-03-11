import React, { useEffect, useState } from 'react';
import { CardsList } from './components/CardsList/CardsList';
import { useGetIds } from './hooks/useGetIds';
import { useGetItems } from './hooks/useGetItems';
import { Pagination } from './components/Pagination/Pagination';
import { Loader } from './components/Loader/Loader';
import { Filter } from './components/Filter/Filter';
import { useFilter } from './hooks/useFilter';
import { FilterProvider } from './context/filterContext';

function App() {
  const [loadingStatus, setLoadingStatus] = useState('pending'); //'ok', 'pending', 'err'
  const [ids, setIds] = useState([]);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(50);
  const [filter, setFilter] = useState('none');

  useGetIds(setIds, setLoadingStatus);
  useGetItems(ids, setItems, page, limit, setLoadingStatus);
  useFilter(filter, setIds, setPage, setLoadingStatus)

  return (
    <div className='container'>
      <div className='controls-wrapper'>
        <FilterProvider value={{
          filter: filter,
          setFilter: setFilter
        }}>
          <Filter />
        </FilterProvider>
      </div>
      <div className='content-wrapper'>
        <Pagination page={page} setPage={setPage} pagesCount={Math.ceil(ids.length / limit)} />

        {
          loadingStatus === 'ok' ?
            <CardsList items={items} /> :
            <Loader status={loadingStatus} />
        }
      </div>
    </div>
  )
}

export default App;