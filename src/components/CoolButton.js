const CoolButton = props => {
    const { children } = props;
    const name = 'Button';
  
    const test = {
      margin: '10px',
      borderRadius: '5px',
      color: '#00F',
      backgroundColor: '#000',
      cursor: 'pointer',
      boxShadow: '5px 5px',
      padding: '10px',
      fontSize: '12px',
    };
    
    return (
      <div>
        <button style={test}>{children}</button>
      </div>
    );
  };
  
  export default CoolButton;