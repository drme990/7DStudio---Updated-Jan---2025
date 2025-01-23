import PropTypes from 'prop-types';

function BannerImg({ img }) {
  return (
    <figure className=" w-32 h-32 mx-2 shrink-0 flex-none overflow-hidden p-4">
      <img src={img} alt="logo" />
    </figure>
  );
}

BannerImg.propTypes = {
  img: PropTypes.string.isRequired,
};

export default BannerImg;
