    // Your React code can go here
    const heading =   React.createElement('div', {id:'parent'}, 
        React.createElement('h1',{id:'heading'},'Hello Suraj, from React 18!'));
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(heading);