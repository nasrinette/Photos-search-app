function ImageShow({img}) {
    return (
      <div className="ImageShow">
          <img src={img.urls.small} alt={img.description} />
      
      </div>
    );
  }
  
  export default ImageShow;