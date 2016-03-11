import React from 'react';
import SparklinesLine from './SparklinesLine';
import SparklinesBars from './SparklinesBars';
import SparklinesSpots from './SparklinesSpots';
import SparklinesReferenceLine from './SparklinesReferenceLine';
import SparklinesNormalBand from './SparklinesNormalBand';
import DataProcessor from './DataProcessor';

class Sparklines extends React.Component {

    static propTypes = {
        data: React.PropTypes.array,
        limit: React.PropTypes.number,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        margin: React.PropTypes.number,
        style: React.PropTypes.object,
        viewbox: React.PropTypes.string
    };

    static defaultProps = {
        data: [],
        width: null,
        height: null,
        margin: 2,
        viewbox: '0 0 100 100'
    };

    constructor (props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.width != this.props.width ||
            nextProps.height != this.props.height ||
            nextProps.margin != this.props.margin ||
            nextProps.data.length != this.props.data.length ||
            nextProps.data.some((d, i) => d !== this.props.data[i]);
    }

    render() {

        const { data, limit, width, height, margin, style, max, min, viewbox  } = this.props;

        if (data.length === 0) return false;

        const points = DataProcessor.dataToPoints(data, limit, width, height, margin, max, min);

        return (
            <svg width={width} height={height} style={style} viewBox={viewbox} preserveAspectRatio>
                {
                    React.Children.map(this.props.children, function(child) {
                        return React.cloneElement(child, { points, width, height, margin });
                    })
                }
            </svg>
        );
    }
}

export { Sparklines, SparklinesLine, SparklinesBars, SparklinesSpots, SparklinesReferenceLine, SparklinesNormalBand, DataProcessor }
