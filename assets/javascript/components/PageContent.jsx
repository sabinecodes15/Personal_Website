class Panel extends React.Component {
    render() {
        return(
            <div></div>
        );
    }
}

class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'default',
        };
    }

    handleClick(page_type) {
        
    }

    render() {
        return(
            <div>
                <Panel/>
            </div>
        );
    }
}