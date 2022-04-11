export function getButtonIcon(btnName: string): string {
    switch (btnName) {
      case "delete":
        return "https://img.icons8.com/ios-glyphs/20/000000/trash--v1.png";
      case "archiv":
        return "https://img.icons8.com/pastel-glyph/20/000000/archive--v4.png";
      case "edit":
        return "https://img.icons8.com/ios-glyphs/20/000000/edit--v1.png";
      default:
        return "https://img.icons8.com/ios-glyphs/344/question-mark.png";
    }
}

export function getCategoryIconPath(category:string): string {
  switch (category) {
    case "Task":
      return "https://img.icons8.com/external-kiranshastry-solid-kiranshastry/25/000000/external-shopping-cart-interface-kiranshastry-solid-kiranshastry.png";
    case "Random Thought":
      return "https://img.icons8.com/ios-filled/25/000000/development-skill.png";
    case "Idea":
      return "https://img.icons8.com/ios/25/000000/idea--v2.png";
    default:
      return "https://img.icons8.com/ios-glyphs/344/question-mark.png";
  }
}