import Shimmer from "./Shimmer";
import SkeletonElement from "./SkeletonElement";

const SkeletonUser = ({ theme }) => {
        const themClass = theme || 'light';
        return (
                <div className={`skeleton-wrapper ${themClass}`}>
                        <div className="skeleton-profile">
                                <div>
                                        <SkeletonElement type="avatar" />
                                </div>
                                <div>
                                        <SkeletonElement type="title" />
                                        <SkeletonElement type="text" />
                                        <SkeletonElement type="text" />
                                </div>
                        </div>
                        <Shimmer />
                </div>
        );
}

export default SkeletonUser;