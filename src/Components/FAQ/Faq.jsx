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
            QA: 'Is your service accessible in rural or low-connectivity areas?',
            content: 'Yes. Accessibility is a core part of our mission. We offer lightweight mobile applications, offline support options, and partner with local healthcare providers to extend our reach—even to areas with limited internet access or medical infrastructure.'
        },
        {
            QA: 'How do your healthcare solutions ensure personalized care?',
            content: 'We use advanced data analytics and smart technologies to tailor health insights, treatment plans, and wellness recommendations to each individual’s needs, lifestyle, and medical history. Our platform learns and adapts, providing a truly personalized care experience.'
        }
    ]
    
    const handleToggle = (index) => {
        setSequence(prev => (prev === index ? null : index))
    }

    return (
        <>
            <div className='Faq-section'>
                <h3>Frequently Asked Questions.</h3>
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
                                    <li className='faq-content'>
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
