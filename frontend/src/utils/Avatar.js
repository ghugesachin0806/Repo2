function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

// export function stringAvatar(name) {
//   const firstCharacter = name ? name.trim()[0] : '';
//   return {
//     sx: {
//       bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
//     },
//     children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
//     // i used only first character to be displayed here
//     // children: firstCharacter,
//   };
// }

export function stringAvatar(name) {
  let firstCharacter = '';
  if (name) {
    let nextIsFirstChar = true;
    for (let i = 0; i < name.length; i++) {
      if (nextIsFirstChar && name[i] !== ' ') {
        firstCharacter += name[i];
        nextIsFirstChar = false;
      } else if (name[i] === ' ') {
        nextIsFirstChar = true;
      }
    }
  }

  return {
    sx: {
      bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
    },
    children: firstCharacter,
  };
}
