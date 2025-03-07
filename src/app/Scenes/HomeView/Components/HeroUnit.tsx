import { Box, Button, Flex, Image, Text, Touchable } from "@artsy/palette-mobile"
import { useScreenDimensions } from "app/utils/hooks"
import { PixelRatio } from "react-native"

interface HeroUnitItem {
  internalID?: string
  title: string
  body: string | null | undefined
  imageSrc: string
  url: string
  buttonText: string
}

interface HeroUnitItemProps {
  item: HeroUnitItem
  onPress?: () => void
}

const fontScale = PixelRatio.getFontScale()

export const HERO_UNIT_CARD_HEIGHT = 250 * fontScale
const CARD_IMAGE_WIDTH = 125
const DESCRIPTION_LINES = fontScale > 1 ? 4 : 3

export const HeroUnit: React.FC<HeroUnitItemProps> = ({ item, onPress }) => {
  const { internalID, title, imageSrc, body, buttonText } = item
  const { width: screenWidth } = useScreenDimensions()
  const cardImageWidth = screenWidth > 700 ? screenWidth / 2 : CARD_IMAGE_WIDTH

  return (
    <Touchable key={internalID} onPress={onPress} haptic="impactLight">
      <Flex bg="black100" flexDirection="row" height={HERO_UNIT_CARD_HEIGHT} width={screenWidth}>
        <Image height={HERO_UNIT_CARD_HEIGHT} src={imageSrc} width={cardImageWidth} />
        <Box p={2} width={screenWidth - cardImageWidth}>
          <Text color="white100" mb={1} numberOfLines={2} variant="lg-display">
            {title}
          </Text>
          <Text color="white100" mb={2} numberOfLines={DESCRIPTION_LINES}>
            {body}
          </Text>
          <Button size="small" variant="outlineLight" onPress={onPress}>
            {buttonText}
          </Button>
        </Box>
      </Flex>
    </Touchable>
  )
}
