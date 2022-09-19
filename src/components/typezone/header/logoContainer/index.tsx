import { FC, FormEvent } from 'react'
import style from "index.module.scss";
import { useState, useEffect } from "react"

type Props = {}


const LogoContainer: FC<Props> = () => {

    // const handleChange = (event: FormEvent<HTMLInputElement>) => {
    //     const value = event.currentTarget.value;
    //     console.log(`Changed in ${value}`)
    // }

    const [value, setValue]: any = useState();

    const handleChange = (event: FormEvent<HTMLInputElement>) => {
        //console.log(event.currentTarget.name, event.currentTarget.value)
        const inputs =
            event.currentTarget.type === "checkbox" ? event.currentTarget.checked : event.currentTarget.value
        setValue({ ...value, [event.currentTarget.name]: inputs });

    };

    useEffect(() => {
        console.log(value);
    }, [value])

    return (
        <div>
            <div>
                <label htmlFor="onChange">On Change -1</label>
                <input type="checkbox" name="onChange" id="onChange" onChange={handleChange} />
                <br />
                <label htmlFor="test">test</label>
                <input type="checkbox" name='test' id="test" />
            </div>
        </div>
    )
}

export default LogoContainer