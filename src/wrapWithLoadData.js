import { Component } from 'react';

const fn = (WrappedComponent, name) => {
    class LoacalStorageActions extends Component {
        constructor() {
            super();
            this.state = { data: null };
        }

        componentWillMount() {
            let data = localStorage.getItem(name);
            try {
                this.setState({ data: JSON.parse(data)});
            } catch (error) {
                this.setState({ data });
            }
        }

        saveData() {
            let data = this.state.data;
            try {
                localStorage.setItem(name, JSON.stringify(data));
            } catch (error) {
                localStorage.setItem(name, `${data}`);
            }
        }

        render() {
            return (
                <WrappedComponent
                    data={this.state.data}
                    saveData={this.saveData.bind(this)}
                    {...this.props}
                ></WrappedComponent>
            )
        }
    }
    return LoacalStorageActions;
}
export default fn;