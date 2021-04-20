import Moment from 'react-moment';

const Quotes = ({ quote }) => {
  return (
    <div className="card mb-4">
      <div className="card-content">
        <div className="media">
          <div className="content">
            <blockquote className="">{quote.quote}</blockquote>
            <p>- {quote.author}</p>
            <small>
              Created at <Moment format="DD-MM-YYYY" date={quote.createdAt} />
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
