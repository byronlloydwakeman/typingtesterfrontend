import React from "react";
import Data from "./defaultValue";
import { IntoSpan } from "./targetinput";
import { renderToStaticMarkup } from "react-dom/server"

import "./dropdowns.css"

const DropDowns = () => {
    var targetInput = document.getElementById("targetInput");

    return(
        <div className="dropdowns__container">
            <div className="text__container">
                <select onChange={() => 
                    {
                        var newText = IntoSpan(document.getElementById("texts").value);
                        var formattedNewText = "";
                        newText.map(el => {formattedNewText += renderToStaticMarkup(el)})
                        document.getElementById("targetInput").innerHTML = formattedNewText;
                    }} className="text-dropdown" name="texts" id="texts">
                    <option selected="selected" value={Data.defaultValue}>Wikipedia extract on Wind and the Willows</option>
                    <option value={`Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`}>Lorem Ipsum History</option>
                    <option value={`A ray of light shines down on a leather-bound storybook. The book opens and a voice begins reading its text: SHREK: Once upon a time there was a lovely princess. But she had an enchantment upon her of a fearful sort which could only be broken by love's first kiss. She was locked away in a castle guarded by a terrible fire-breathing dragon. Many brave knights had attempted to free her from this dreadful prison, but none prevailed. She waited in the dragon's keep in the highest room of the tallest tower. For her true love and true love's first kiss. The voice laughs. A big, green hand rips out a page of the book and shuts it closed. SHREK: Like that's ever gonna happen. What a load of - We see an outhouse and hear the sound of a toilet flushing. Out steps SHREK, an ogre, who tugs at his underwear and shakes his foot of the page still stuck to his shoe. He looks lovingly at the swamp he calls home, and goes about his daily routine. This includes taking a mud shower, brushing his teeth with bugs, bathing in a muddy pond, gathering giant slugs for dinner, and painting a warning sign. In a nearby village, an angry mob gather up to go after Shrek. At night they gather their torches and pitchforks and enter the swamp, trampling over Shrek's warning signs. Shrek sees them after investigating the commotion, rolling his eyes. The villagers stop outside Shrek's home, unaware that Shrek is sneaking up behind them.`}>Shrek 1 Script</option>
                </select>
            </div>
            {/* <div className="time__container">
                <select onChange={() => 
                    {
                        document.getElementById("timeLeft").innerHTML = document.getElementById("time").value + " seconds"
                    }} className="time-dropdown" name="time" id="time">
                    <option selected="selected" value={60}>60</option>
                    <option value={45}>45</option>
                    <option value={30}>30</option>
                    <option value={15}>15</option>
                </select>
            </div> */}
        </div>
    )   
}

export default DropDowns;