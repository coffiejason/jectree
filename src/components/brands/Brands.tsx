import { AspectRatio, Box, Center, createStyles, Image } from "@mantine/core";
import {     google,
    yc,
    ug,
    fbn, } from "./imports";

const BREAKPOINT = '@media (max-width: 755px)';

const useStyles = createStyles((theme, _params, getRef) => ({
    center:{
        marginTop: 50
    },
    image_box: {
        width: 100,
        marginLeft: 15,
        marginRight: 15,

        [BREAKPOINT]: {
            width: 100,
            marginLeft: 10,
            marginRight: 10,
        },

    }

}));

const Brands = () => {
    const { classes } = useStyles();
    
    return (
        <>
            <Center className={classes.center}>
                {/* <Box className={classes.image_box} >
                    <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
                        <Image
                            src={google}
                            alt="Google"
                        />
                    </AspectRatio>
                </Box> */}
                <Box className={classes.image_box} >
                    <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
                        <Image
                            src={yc}
                            alt="Y combinator"
                        />
                    </AspectRatio>
                </Box>
                {/* <Box className={classes.image_box} >
                    <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
                        <Image
                            src={dropbox}
                            alt="Dropbox"
                        />
                    </AspectRatio>
                </Box> */}
                <Box className={classes.image_box} >
                    <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
                        <Image
                            src={fbn}
                            alt="FBN Bank"
                        />
                    </AspectRatio>
                </Box>
                <Box className={classes.image_box} >
                    <AspectRatio ratio={1020 / 1080} sx={{ maxWidth: 300 }} mx="auto">
                        <Image
                            src={ug}
                            alt="university of ghana"
                        />
                    </AspectRatio>
                </Box>
            </Center>
        </>
    )
}

export default Brands;


