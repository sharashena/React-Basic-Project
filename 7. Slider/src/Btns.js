import React, { useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

export default function Btns({ index, setIndex, people }) {

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            return setIndex(lastIndex);
        }
        if (index > lastIndex) {
            return setIndex(0);
        }
    }, [index, people]);


    useEffect(() => {
        const slider = setTimeout(() => {
            setIndex(index + 1);
        }, 5000)
        return () => clearTimeout(slider);
    }, [index]);

    
    return (
        <div>
            <button className="prev" onClick={() => setIndex(index - 1)}>
                <FiChevronLeft />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
            </button>
        </div>
    )
}
