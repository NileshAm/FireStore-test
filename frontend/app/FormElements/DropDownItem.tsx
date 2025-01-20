const DropDownItem = ({value, name}:{value:string,name:string}) => {
  return <option value={value}>{name}</option>;
}

export default DropDownItem