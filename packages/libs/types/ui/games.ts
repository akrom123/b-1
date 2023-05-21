export enum GameType {
  TrendingGames = 'TrendingGames',
  Slots = 'Slots',
  LiveCasino = 'LiveCasino',
  GameProviders = 'GameProviders',
  Promotions = 'Promotions',
  RecommendedGames = 'RecommendedGames',
}

export const gameNames: Record<GameType, string> = {
  [GameType.TrendingGames]: 'Slots',
  [GameType.Slots]: 'Slots',
  [GameType.LiveCasino]: 'Live <span>Casino</span>',
  [GameType.GameProviders]: 'Game Providers',
  [GameType.Promotions]: 'Promotions',
  [GameType.RecommendedGames]: 'Recommended Games',
};
