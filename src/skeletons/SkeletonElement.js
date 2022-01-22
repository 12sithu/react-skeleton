import React from 'react';
import './Skeleton.css';
const SkeletonElement = ({type}) => {
        const classname = `skeleton ${type}`;
        return (
                <div className={classname}></div>
        );
}

export default SkeletonElement;