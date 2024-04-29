/** @jsxImportSource @emotion/react */



function AdminBookRegisterInput({ value, onChange, onKeyDown, bookref, isDisabled }) {
    return (
        <input 
            value={value} 
            onChange={onChange} 
            onKeyDown={onKeyDown}
            ref={bookref}
            disabled={isDisabled}
        />
    );
}
export default AdminBookRegisterInput;