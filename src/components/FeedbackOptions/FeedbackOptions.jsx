import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css'
export default function FeedbackOptions({ options }){
    return(
        <>
            <h2 className={s.h2T}>Please live feedback</h2>
            <div>
                {options.map(option => (
                    <button key={option.response} name={option.response} className={s.buttonn} onClick={option.click} type="button">{option.response}</button>
                ))}
            </div>

        </>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
}