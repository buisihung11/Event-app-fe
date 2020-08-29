import { Component } from 'react';
import { DatePicker, Row, Col } from 'antd';
import moment from 'moment';
import { getLocale } from 'umi-plugin-react/locale';
import { formatMessage } from 'umi-plugin-react/locale';

const DATE_FORMAT = 'DD/MM/YY';
let currentLocale = getLocale();
class TimeFilter extends Component {
  render = () => (
    <Row>
          <DatePicker placeholder={formatMessage({id:'events.list.filters.time.from'})} style={{width:'100%'}} size="large" format={DATE_FORMAT} locale={currentLocale} />
          <DatePicker placeholder={formatMessage({id:'events.list.filters.time.to'})} style={{width:'100%', marginTop:'10px'}} size="large" format={DATE_FORMAT} locale={currentLocale} />
    </Row>
  );
}

export default TimeFilter;
