import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
import Qrcode from '../../assets/authors/qrcode.jpg';

const Wechat = () => {
  const [fill, setFill] = useState('#FFB4B4');

  useEffect(() => {
    const element = document.getElementsByTagName('html')[0];
    const observer = new MutationObserver((mutationsList, observer) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const hasClass = element.classList.contains('dark');
          setFill(hasClass ? '#FFB4B4' : 'rgb(0 48 73 / 0.6)');
        }
      }
    });

    observer.observe(element, { attributes: true });

    return () => {
      observer.disconnect();
    }
  }, []);

  const content = (
    <div>
      <img width={200} height={200} src={Qrcode.src} alt="" />
    </div>
  )

  return (
    <Popover content={content}>
      <li className="cursor-pointer">
        <svg style={{ fill }} width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12 0c-6.626 0-12 5.372-12 12 0 6.627 5.374 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm5.543 16.389c.889-.644 1.457-1.597 1.457-2.656 0-1.94-1.888-3.514-4.217-3.514-2.329 0-4.217 1.574-4.217 3.514 0 1.941 1.888 3.514 4.217 3.514.481 0 .946-.068 1.377-.192l.124-.019c.081 0 .154.025.224.065l.923.533.081.026c.078 0 .14-.063.14-.14l-.022-.103-.19-.709-.015-.09c0-.094.047-.178.118-.229zm-7.483-10.049c-2.794 0-5.06 1.888-5.06 4.217 0 1.27.682 2.414 1.748 3.187.086.061.142.161.142.275l-.018.107-.228.851-.027.123c0 .093.076.169.169.169l.097-.032 1.108-.639c.083-.048.172-.078.269-.078l.149.022c.516.149 1.074.231 1.651.231l.278-.006c-.11-.329-.17-.675-.17-1.034 0-2.123 2.066-3.845 4.615-3.845l.275.007c-.381-2.015-2.473-3.555-4.998-3.555zm3.317 6.831c-.31 0-.562-.252-.562-.562 0-.311.252-.562.562-.562.311 0 .563.251.563.562 0 .31-.252.562-.563.562zm2.812 0c-.311 0-.562-.252-.562-.562 0-.311.251-.562.562-.562.31 0 .562.251.562.562 0 .31-.252.562-.562.562zm-7.815-3.289c-.373 0-.675-.302-.675-.675 0-.372.302-.674.675-.674.372 0 .674.302.674.674 0 .373-.302.675-.674.675zm3.373 0c-.373 0-.675-.302-.675-.675 0-.372.302-.674.675-.674.373 0 .675.302.675.674 0 .373-.302.675-.675.675z"/></svg>
      </li>
    </Popover>
  )
}

export default Wechat;