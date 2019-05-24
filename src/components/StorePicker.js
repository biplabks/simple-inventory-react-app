import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    static propTypes = {
        history: PropTypes.object
    };
    
    goToStore = event => {
        // Stop the form from submitting
        event.preventDefault();

        // first grab the text from the box
        const storeId = this.myInput.current.value;
        
        // second we're going to transition from / to /store/:storeId
        this.props.history.push(`/store/${storeId}`);
    }
    render() {
        return (
            <form className="store-selector" onSubmit={this.goToStore}>
                {/* Hello */}
                <h2>Please Enter A Store</h2>
                <input 
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Store Name" 
                    defaultValue={getFunName()} />
                <button type="submit">Visit Store-></button>
            </form>
        );
    }
}

export default StorePicker;