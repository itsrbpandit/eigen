import { Flex, Screen, Text } from "@artsy/palette-mobile"
import { ArtworkAutosuggest } from "app/Scenes/MyCollection/Screens/ArtworkForm/Components/ArtworkAutosuggest"

export const SelectArtworkMyCollectionArtwork: React.FC = ({}) => {
  return (
    <Screen.Body>
      <Flex>
        <Text variant="lg" mb={2}>
          Select artwork from My Collection
        </Text>

        <ArtworkAutosuggest onResultPress={() => {}} onSkipPress={() => {}} />
      </Flex>
    </Screen.Body>
  )
}