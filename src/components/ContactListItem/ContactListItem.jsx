import PropTypes from 'prop-types';
import {
  Text,
  Button,
} from 'components/ContactListItem/ContactListItem.styled';

export const ContactListItem = ({
  contact: { id, name, number },
  onDelete,
}) => {
  return (
    <>
      <Text>
        {name}: {number}
      </Text>
      <Button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
