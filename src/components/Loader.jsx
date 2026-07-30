import { Audio } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="spinner">
      <Audio
      height="80"
      width="80"
      color="#cb2a1f"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
      </div>
    </div>
  );
};

export default Loader;