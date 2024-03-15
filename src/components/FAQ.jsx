import React from 'react'

const FAQ = () => {
  return (
    <div className='faq'>
        <h1>Frequently Asked Questions</h1>
        <p>Have question? We are here to help</p>
        <section className='services'>
            <div className='service-right'>
                <div className='qa'>
                    <input type="checkbox" id='collapsible-head-1' />
                    <label for = "collapsible-head-1"> 
Which American car manufacturer makes the charger and challenger models?</label>
                    <div className='collapsible-text-1'>
                        <p>Dodge is the correct answer because they are the American car manufacturer that produces the Charger and Challenger models. Cadillac, Ford, and Lincoln are not associated with these specific models.</p>
                    </div>
                </div>
                <div className='qa'>
                <input type="checkbox" id="collapsible-head-2" />
                <label for="collapsible-head-2"> 
What is another term for voltage?</label>
                <div class="collapsible-text-2">
                    <p>Voltage is often referred to as "electrical pressure" because it represents the force or pressure that pushes electric charges through a circuit. This analogy helps to understand the concept of voltage as the driving force behind the flow of electric current. Therefore, pressure is another term used to describe voltage.</p>
                </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-3" />
                    <label for="collapsible-head-3">What does DOHC stand for?</label>
                    <div class="collapsible-text-3">
                        <p>DOHC stands for "double over head cam". This refers to an engine design that has two camshafts located above the cylinder head. These camshafts control the opening and closing of the intake and exhaust valves. This configuration allows for better engine performance and efficiency compared to a single overhead cam (SOHC) design.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-4" />
                    <label for="collapsible-head-4"> 
A type of clutch?</label>
                    <div class="collapsible-text-4">
                        <p>A diaphragm spring clutch is a type of clutch that uses a diaphragm spring to engage and disengage the clutch mechanism. The diaphragm spring is a flat, circular spring that applies pressure to the clutch plate, allowing it to engage with the flywheel and transmit power from the engine to the transmission. This type of clutch is commonly used in vehicles as it provides a smooth and efficient operation, allowing for easy shifting of gears.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-5" />
                    <label for="collapsible-head-5">Name the gearbox component?</label>
                    <div class="collapsible-text-5">
                        <p>The correct answer is "input shaft". The input shaft is a component of a gearbox that transfers torque from the engine to the transmission. It connects to the clutch and receives power from the engine, allowing it to rotate and transmit power to the gears within the gearbox. This component is essential for the proper functioning of the gearbox and the overall operation of the vehicle.</p>
                    </div>
                </div>
                <div className='qa'>
                    <input type="checkbox" id="collapsible-head-6" />
                    <label for="collapsible-head-6"> 
Give the approx bhp of the buggatti veyron?</label>
                    <div class="collapsible-text-6">
                        <p>The approximate brake horsepower (bhp) of the Bugatti Veyron is 1000. Brake horsepower is a unit of measurement used to determine the power output of an engine. In the case of the Bugatti Veyron, its engine produces approximately 1000 bhp, making it an incredibly powerful and high-performance vehicle.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default FAQ