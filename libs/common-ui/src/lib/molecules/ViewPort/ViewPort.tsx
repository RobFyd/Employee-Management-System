import { useViewPort } from '../../hooks/useViewPort';

export const ViewPort = () => {
    const size = useViewPort();

    return (
        <div>
            x: {size.width}, y: {size.height}
        </div>
    )
};
