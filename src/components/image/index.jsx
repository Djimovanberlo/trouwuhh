const Image = ({ className = '', src }) => <img className={className} src={`${process.env.PUBLIC_URL}${src}`} alt='' />

export default Image
