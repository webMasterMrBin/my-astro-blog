import React, { useEffect, useRef, useState } from 'react';

const TableContents = ({ tableContents }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    });
    const result = tableContents.reduce((acc, cur) => [...acc, cur, ...(cur.children || [])], []);

    result.forEach(v => {
      observer.observe(document.getElementById(v.id.slice(1)));
    });

    return () => {
      observer.disconnect();
    }
  }, []);

  const activeCls = v => {
    return v.id === `#${activeId}` && 'text-pacamara-secondary'
  }

  return (
    <aside className="md:block hidden dark:text-white sticky top-[100px] h-[200px] w-[200px] mt-[20px] ml-[60px]">
      <h4 className="mb-[10px] text-xl">目录</h4>
      {tableContents.map(v => (<div key={v.id}>
        <a className={`block mt-[16px] ${activeCls(v)}`} href={v.id}>{v.name}</a>
        {v.children?.map(child => <a key={child.id} className={`block mt-[10px] ml-[10px] ${activeCls(child)}`} href={child.id}>{child.name}</a>)}
      </div>))}
    </aside>
  )
};

export default TableContents;