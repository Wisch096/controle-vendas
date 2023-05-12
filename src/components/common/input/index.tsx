import  {InputHTMLAttributes} from 'react'
import { formatReal } from 'app/util/money'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    onChange?: (value) => void;
    label: string;
    columnClass?: string;
    currency?: boolean;
}

export const Input: React.FC<InputProps> = ({ 
    onChange,
    label,
    columnClass,
    id,
    currency,
    ...inputProps
}: InputProps ) => {

    const onInputChange = (event) => {
        let value = event.target.value;

        if(value && currency) {
            value = formatReal(value);
        }

        if(onChange) {
            onChange(value)
        }
    }

    return (
        <div className={`field column ${columnClass}`}>
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input  className="input"
                        id={id} {...inputProps}
                        onChange={onInputChange}/>
            </div>    
        </div>
    )
}