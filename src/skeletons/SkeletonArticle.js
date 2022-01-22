import SkeletonElement from "./SkeletonElement";
import './Skeleton.css'
import Shimmer from "./Shimmer";
const SkeletonArticle = ({theme}) => {
        const themClass = theme || 'light';
        return (
                <div className={`skeleton-wrapper ${themClass}`}>
                        <div className="skeleton-article">
                                <SkeletonElement type="title" />
                                <SkeletonElement type="text" />
                                <SkeletonElement type="text" />
                                <SkeletonElement type="text" />
                        </div>
                        <Shimmer />
                </div>
        );
}

export default SkeletonArticle;