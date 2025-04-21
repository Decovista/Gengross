import React, { useState } from 'react'
import './Faq.css'

function Faq() {
    const [sequence, setSequence] = useState(null)

    const faqData = [
        {
            QA: 'What is Gengoss?',
            content: 'It is a forward-thinking pharmaceutical company committed to enhancing global health through high-quality, affordable, and innovative healthcare solutions. With a focus on the development, manufacturing, and distribution of generic medicines, Gengross aims to make essential treatments accessible to communities worldwide.'
        },
        {
            QA: 'What Gengross does?',
            content: 'Gengross specializes in the research, development, manufacturing, and distribution of high-quality generic pharmaceutical products. We provide a wide range of affordable and effective medicines across various therapeutic categories, ensuring better access to healthcare for people around the world'
        },
        {
            QA: 'How it is useful for its customers?',
            content: 'Gengross delivers real value to its customers by providing high-quality, affordable, and reliable pharmaceutical products that meet international regulatory standards. Whether you are a healthcare provider, pharmaceutical distributor, or contract partner, Gengross ensures consistent access to the medicines you need—when you need them.'
        },
        {
            QA: 'What pharmaceutical formulations does Gengross manufacture?',
            content: 'Gengross manufactures a wide range of pharmaceutical formulations, including tablets, capsules, syrups, suspensions, injectables, and nutraceuticals. We also offer customized and contract manufacturing solutions, all developed under strict GMP standards to ensure quality, safety, and global compliance.'
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
