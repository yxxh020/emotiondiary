const MyHeader = ({ headText, leftChild, rightChild }) => {
  return (
    <header>
      <div className='w-3/12 justify-start'>{leftChild}</div>
      <div className='w-2/4 text-2xl justify-center'>{headText}</div>
      <div className='w-3/12 justify-end'>{rightChild}</div>
    </header>
  );
};

export default MyHeader;
