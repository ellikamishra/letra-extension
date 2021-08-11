import { styled } from 'stitches.config';
import Container, { GridContainer } from '~/ui/Container';
import Text from '~/ui/Text';
import Button from '~/ui/Button';
import Box from '~/ui/Box';
import { ExternalLink } from '~/ui/TextLink';

const MoonIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M33.3334 23.3332C33.3327 27.9686 34.7128 32.4993 37.2975 36.3472C39.8822 40.1952 43.5545 43.186 47.846 44.9384C52.1375 46.6908 56.8536 47.1252 61.393 46.1862C65.9324 45.2473 70.0893 42.9776 73.3334 39.6665V39.9998C73.3334 58.4098 58.4101 73.3332 40.0001 73.3332C21.5901 73.3332 6.66675 58.4098 6.66675 39.9998C6.66675 21.5898 21.5901 6.6665 40.0001 6.6665H40.3334C38.1135 8.83692 36.3505 11.4297 35.1483 14.2921C33.9461 17.1545 33.329 20.2286 33.3334 23.3332V23.3332ZM13.3334 39.9998C13.331 45.9498 15.3185 51.7296 18.9797 56.4197C22.6409 61.1098 27.7655 64.4408 33.5381 65.8826C39.3107 67.3244 45.3997 66.7942 50.8362 64.3764C56.2728 61.9586 60.7445 57.7921 63.5401 52.5398C58.5649 53.712 53.3727 53.5935 48.4561 52.1956C43.5396 50.7977 39.0618 48.1668 35.4474 44.5525C31.8331 40.9382 29.2022 36.4603 27.8043 31.5438C26.4065 26.6272 26.288 21.435 27.4601 16.4598C23.192 18.7336 19.6227 22.1254 17.1343 26.272C14.6458 30.4186 13.332 35.1639 13.3334 39.9998V39.9998Z"
      fill="#D8C078"
    />
  </svg>
);

const TimeIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40.0001 73.3334C21.5901 73.3334 6.66675 58.4101 6.66675 40.0001C6.66675 21.5901 21.5901 6.66675 40.0001 6.66675C58.4101 6.66675 73.3334 21.5901 73.3334 40.0001C73.3334 58.4101 58.4101 73.3334 40.0001 73.3334ZM40.0001 66.6668C47.0725 66.6668 53.8553 63.8572 58.8563 58.8563C63.8572 53.8553 66.6668 47.0725 66.6668 40.0001C66.6668 32.9276 63.8572 26.1449 58.8563 21.1439C53.8553 16.1429 47.0725 13.3334 40.0001 13.3334C32.9276 13.3334 26.1449 16.1429 21.1439 21.1439C16.1429 26.1449 13.3334 32.9276 13.3334 40.0001C13.3334 47.0725 16.1429 53.8553 21.1439 58.8563C26.1449 63.8572 32.9276 66.6668 40.0001 66.6668V66.6668ZM43.3334 40.0001H56.6668V46.6667H36.6667V23.3334H43.3334V40.0001Z"
      fill="#D8C078"
    />
  </svg>
);

const WorldIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.7834 21.5098C16.5336 25.9208 13.9317 31.6603 13.4153 37.7637C12.8989 43.8671 14.4993 49.9622 17.9476 55.0245C21.3959 60.0869 26.4818 63.8078 32.3505 65.5619C38.2191 67.316 44.5127 66.9963 50.1734 64.6565C50.5568 62.1565 49.7168 59.7565 49.3734 58.9165C48.6068 57.0498 46.0801 53.8598 41.8634 49.4365C40.7367 48.2532 40.8101 47.3432 41.2134 44.6465L41.2567 44.3432C41.5301 42.4965 41.9901 41.4032 48.2067 40.4165C51.3667 39.9165 52.1967 41.1765 53.3467 42.9265L53.7334 43.4998C54.8268 45.0998 55.6368 45.4665 56.8601 46.0198C57.4101 46.2698 58.0934 46.5865 59.0101 47.1032C61.1834 48.3465 61.1834 49.7498 61.1834 52.8232V53.1732C61.1834 54.4765 61.0568 55.6232 60.8568 56.6198C63.4146 53.4096 65.1971 49.6523 66.0654 45.6405C66.9337 41.6287 66.8643 37.4706 65.8628 33.4899C64.8613 29.5093 62.9546 25.8135 60.2911 22.6903C57.6276 19.5671 54.2793 17.1007 50.5068 15.4832C48.6634 16.7265 46.1334 18.4898 45.2501 19.6998C44.8001 20.3165 44.1601 23.4732 42.0834 23.7332C41.5434 23.7998 40.8134 23.7532 40.0401 23.7032C37.9667 23.5698 35.1334 23.3865 34.2267 25.8498C33.6501 27.4098 33.5501 31.6498 35.4134 33.8498C35.7134 34.1998 35.7701 34.8498 35.5667 35.5798C35.3001 36.5365 34.7634 37.1198 34.5934 37.2398C34.2734 37.0532 33.6334 36.3098 33.1967 35.8065C32.1534 34.5898 30.8467 33.0732 29.1601 32.6065C28.5467 32.4365 27.8734 32.2965 27.2167 32.1565C25.3867 31.7732 23.3167 31.3365 22.8334 30.3098C22.4801 29.5565 22.4834 28.5198 22.4834 27.4265C22.4834 26.0365 22.4834 24.4665 21.8034 22.9432C21.567 22.3995 21.2196 21.9113 20.7834 21.5098V21.5098ZM40.0001 73.3332C21.5901 73.3332 6.66675 58.4098 6.66675 39.9998C6.66675 21.5898 21.5901 6.6665 40.0001 6.6665C58.4101 6.6665 73.3334 21.5898 73.3334 39.9998C73.3334 58.4098 58.4101 73.3332 40.0001 73.3332Z"
      fill="#D8C078"
    />
  </svg>
);

const SunIcon = (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M39.9999 59.9999C34.6956 59.9999 29.6085 57.8928 25.8578 54.1421C22.1071 50.3913 19.9999 45.3042 19.9999 39.9999C19.9999 34.6956 22.1071 29.6085 25.8578 25.8578C29.6085 22.1071 34.6956 19.9999 39.9999 19.9999C45.3042 19.9999 50.3913 22.1071 54.1421 25.8578C57.8928 29.6085 59.9999 34.6956 59.9999 39.9999C59.9999 45.3042 57.8928 50.3913 54.1421 54.1421C50.3913 57.8928 45.3042 59.9999 39.9999 59.9999ZM39.9999 53.3332C43.5361 53.3332 46.9275 51.9285 49.428 49.428C51.9285 46.9275 53.3332 43.5361 53.3332 39.9999C53.3332 36.4637 51.9285 33.0723 49.428 30.5718C46.9275 28.0713 43.5361 26.6666 39.9999 26.6666C36.4637 26.6666 33.0723 28.0713 30.5718 30.5718C28.0713 33.0723 26.6666 36.4637 26.6666 39.9999C26.6666 43.5361 28.0713 46.9275 30.5718 49.428C33.0723 51.9285 36.4637 53.3332 39.9999 53.3332V53.3332ZM36.6666 3.33325H43.3332V13.3333H36.6666V3.33325ZM36.6666 66.6666H43.3332V76.6666H36.6666V66.6666ZM11.7166 16.4299L16.4299 11.7166L23.4999 18.7866L18.7866 23.4999L11.7166 16.4333V16.4299ZM56.4999 61.2132L61.2132 56.4999L68.2832 63.5699L63.5699 68.2832L56.4999 61.2132ZM63.5699 11.7133L68.2832 16.4299L61.2132 23.4999L56.4999 18.7866L63.5699 11.7166V11.7133ZM18.7866 56.4999L23.4999 61.2132L16.4299 68.2832L11.7166 63.5699L18.7866 56.4999V56.4999ZM76.6666 36.6666V43.3332H66.6666V36.6666H76.6666ZM13.3333 36.6666V43.3332H3.33325V36.6666H13.3333Z"
      fill="#D8C078"
    />
  </svg>
);

const features = [
  {
    icon: MoonIcon,
    label: 'Dark, simple, and clean interface',
  },
  {
    icon: WorldIcon,
    label: 'Learn multiple languages at once',
  },
  {
    icon: TimeIcon,
    label: 'Shows current date and time',
  },
  {
    icon: SunIcon,
    label: 'New background and quote everyday',
  },
];

function OtherFeatures() {
  return (
    <Box>
      <Container
        size="xs"
        css={{
          textAlign: 'center',
          mb: '$6',
        }}
      >
        <Text type="h1" css={{ color: '$primary' }}>
          Other Features
        </Text>
      </Container>
      <GridContainer
        size="sm"
        css={{
          gridTemplateColumns: '1fr',
          gridRowGap: '$6',
          justifyContent: 'center',
          alignItems: 'center',
          '@sm': {
            gridTemplateColumns: '1fr 1fr',
            gridRowGap: '$7',
            gridColumnGap: '$4',
          },
        }}
      >
        {features.map((feature, index) => {
          return (
            <Box
              key={index}
              css={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {feature.icon}
              <Text
                type="p"
                css={{ ml: '$4', lineHeight: '28px', width: '50%', '@sm': { width: '200px' } }}
              >
                {feature.label}
              </Text>
            </Box>
          );
        })}
      </GridContainer>
    </Box>
  );
}

export default OtherFeatures;