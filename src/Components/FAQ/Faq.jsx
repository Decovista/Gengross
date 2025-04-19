import React, { useState } from 'react'
import './Faq.css'

function Faq() {
    const [sequence, setSequence] = useState(null)

    const faqData = [
        {
            QA: 'What is Gengoss',
            content: 'Gengross is a Lorem ipsum dolor sit amet consectetur adipisicing elit...'
        },
        {
            QA: 'What Gengross does',
            content: 'Gengross is a Lorem ipsum dolor sit amet consectetur adipisicing elit...'
        },
        {
            QA: 'How it is useful for its customers',
            content: 'Gengross is a Lorem ipsum dolor sit amet consectetur adipisicing elit...'
        },
        {
            QA: 'What are the major products',
            content: 'Gengross is a Lorem ipsum dolor sit amet consectetur adipisicing elit...'
        }
    ]

    const handleToggle = (index) => {
        setSequence(prev => (prev === index ? null : index))
    }

    return (
        <>
            <div className='Faq-section'>
                <h3>FAQ's</h3>
                <ul>
                    {faqData.map((item, index) => (
                        <li key={index} onClick={() => handleToggle(index)}>
                            <div className='Faq-r1'>
                                <p>{item.QA}</p>
                                <i
                                    className={`fa-solid ${sequence === index ? 'fa-minus' : 'fa-plus'}`}
                                ></i>
                            </div>

                            {sequence === index && (
                                <ul className='sub-con'>
                                    <li>
                                        <p>{item.content}</p> </li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <hr style={{ height: '1.5px', color: '#0b474b', width: '80%', margin: '20px auto' }} />
        </>
    )
}

export default Faq
