const Songs = [
    {
      id: 1,
      favourite: false,
      songName: "Hotel California",
      artist: "Eagles",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FEagles-HotelCalifornia.mp3?alt=media&token=5567f009-55ec-445c-81cb-3dfa70b812b5",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FHotelCalifornia-Cover.jpg?alt=media&token=4cc1e102-67ac-472b-a8bb-5e994e30a805",
    },
    {
      id: 2,
      favourite: false,
      songName: "Low Life",
      artist: "Future ft The Weekend",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FFuture-LowLife-ft-TheWeekend.mp3?alt=media&token=679daef6-cd2d-45ce-b620-58ad647a3712",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FLowLife-Cover.jpg?alt=media&token=f273fb34-3d51-421a-bf42-160aed59ff4c",
    },
    {
      id: 3,
      favourite: false,
      songName: "Mask Off",
      artist: "Future ft Kendrick Lamar",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FFuture-MaskOff-ft-KendrickLamar.mp3?alt=media&token=bfb4c87a-a807-4388-a5bf-8188a74f9f89",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FMaskOff-Cover.jpg?alt=media&token=ce2b9b10-cca0-4ffb-b5c9-85a8f8af09bb",
    },
    {
      id: 4,
      favourite: false,
      songName: "I Like Me Better",
      artist: "Lauv",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-7a2ef.appspot.com/o/Ringtone%2Fpeaky-blinder.mp3?alt=media&token=2ddb5cfb-f4e0-4604-b77c-a7f63894d3echttps://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FLauv-ILikeMeBetter.mp3?alt=media&token=d1b40fd2-6103-4fb9-bd4d-3e973cc0b32e",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FILikeMeBetter-Cover.jpg?alt=media&token=5e9a6909-9ce6-4d56-932f-f7f479053bae",
    },
    {
      id: 5,
      favourite: false,
      songName: "Comfortably Numb",
      artist: "Pink Floyd",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FPinkFloyd-ComfortablyNumb.mp3?alt=media&token=0bc4ecf1-e981-4a88-b80e-d94ca09d6fc4",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FComfortablyNumb-Cover.jpg?alt=media&token=2ce689e8-d0d9-4a40-9934-5917e79c9b62",
    },
    {
      id: 6,
      songName: "Wish You Were Here",
      artist: "Pink Floyd",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FPinkFloyd-WishYouWereHere.mp3?alt=media&token=4202214c-923a-40ce-8f5a-902d153dc34b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FWishYouWereHere-Cover.jpg?alt=media&token=dccd0301-f9f1-4387-8a70-3b2fa86012cf",
    },
    {
      id: 7,
      favourite: false,
      songName: "Call Out My Name",
      artist: "The Weekend",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FTheWeekend-CallOutMyName.mp3?alt=media&token=104c15ae-a11c-4798-b62b-ba54e7bb3083",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FCallOutMyName-Cover.jpg?alt=media&token=e32327a5-9bc9-4645-92cd-11773de674cc",
    },
    {
      id: 8,
      favourite: false,
      songName: "I Feel It Coming",
      artist: "The Weekend",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FTheWeekend-IFeelItComing-ft-DaftPunk.mp3?alt=media&token=f41a83f6-e4f1-4700-85d1-00ae62a8eb4b",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FIFeelItComing-Cover.jpg?alt=media&token=3616aad1-908a-4d74-a1f9-a1c6c76e8df3",
    },
    {
      id: 9,
      favourite: false,
      songName: "Starboy",
      artist: "The Weekend",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FTheWeekend-Starboy.mp3?alt=media&token=96f955f3-0b54-4897-a45b-66566d824c87",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FStarboy-Cover.jpg?alt=media&token=ea5e0e10-48ef-4278-b51f-8ef61d78d957",
    },
    {
      id: 10,
      favourite: false,
      songName: "Creep",
      artist: "Radiohead",
      song: "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/music%2FRadiohead-Creep.mp3?alt=media&token=c3458431-e319-4f40-8dfa-353d57984909",
      imgSrc:
        "https://firebasestorage.googleapis.com/v0/b/spotify-clone-90a30.appspot.com/o/images%2FCreep-Cover.jpg?alt=media&token=1c48f2c4-3a69-45f9-930d-4c5c23cf13d7",
    },
  ];
  
  export { Songs };