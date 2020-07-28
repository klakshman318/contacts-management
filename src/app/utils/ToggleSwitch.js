import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../../styles/toggleSwitch.scss';

class ToggleSwitch extends Component {

    state = {
        checked: this.props.defaultChecked
    };

    onChange = e => {
        this.setState({
            checked: e.target.checked
        });
        if (typeof this.props.onChange === 'function') this.props.onChange();
    };

    render() {
        return (
            <div className={'toggle-switch' + (this.props.Small ? 'small-switch' : '')}>
                <input
                    type='checkbox'
                    name={this.props.Name}
                    className='toggle-switch-checkbox'
                    id={this.props.id}
                    checked={this.props.currentValue}
                    defaultChecked={this.props.defaultChecked}
                    onChange={this.onChange}
                    disabled={this.props.disabled}
                />
                {this.props.id ? (
                    <label className='toggle-switch-label' htmlFor={this.props.id}>
                        <span
                            className={
                                this.props.disabled
                                ? 'toggle-switch-inner toggle-switch-disabled'
                                : 'toggle-switch-inner'
                            }
                            data-yes={this.props.Text[0].trim()}
                            data-no={this.props.Text[1].trim()}
                        />
                        <span
                            className={
                                this.props.disabled
                                ? 'toggle-switch-switch toggle-switch-disabled'
                                : 'toggle-switch-switch'
                            }
                        />
                    </label>
                ) : null}
            </div>
        );
    }

    static defaultProps = {
        Text: ['Yes', 'No']
    };
}

ToggleSwitch.propTypes = {
  id: PropTypes.string.isRequired,
  Text: PropTypes.array.isRequired,
  Name: PropTypes.string,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  Small: PropTypes.bool,
  currentValue: PropTypes.bool,
  disabled: PropTypes.bool
};

export default ToggleSwitch;