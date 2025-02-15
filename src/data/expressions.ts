export type ExpressionRule = {
  wrong: string[];
  correct: string[];
};

export type ExpressionsData = {
  [key: string]: ExpressionRule;
};

export const expressions: ExpressionsData = {
  '1': {
    wrong: ['5月祭'],
    correct: ['第98回五月祭'],
  },
  '2': {
    wrong: ['東京大学第98回五月祭'],
    correct: ['東京大学 第98回五月祭'],
  },
  '3': {
    wrong: ['東京大学五月祭'],
    correct: ['東京大学 五月祭'],
  },
  '4': {
    wrong: [],
    correct: ['五月祭'],
  },
  '5': {
    wrong: ['去年の五月祭', '昨年度の五月祭'],
    correct: ['昨年の五月祭'],
  },
  '6': {
    wrong: ['来年度の五月祭'],
    correct: ['来年の五月祭'],
  },
  '7': {
    wrong: ['5月24日（土）、25日（日）'],
    correct: ['5月24日（土）・25日（日）'],
  },
  '8': {
    wrong: [],
    correct: ['五月祭当日'],
  },
  '9': {
    wrong: [],
    correct: ['（五月祭）開催時間'],
  },
  '10': {
    wrong: [],
    correct: ['委員会'],
  },
  '11': {
    wrong: [],
    correct: ['五月祭常任委員会'],
  },
  '12': {
    wrong: [],
    correct: ['東京大学 第98期五月祭常任委員会'],
  },
  '13': {
    wrong: [],
    correct: ['東京大学 五月祭常任委員会'],
  },
  '14': {
    wrong: [],
    correct: ['第98期五月祭常任委員会'],
  },
  '15': {
    wrong: [],
    correct: ['委員会室（第二食堂3階6号室）'],
  },
  '16': {
    wrong: [],
    correct: [
      '本郷本部\n〒113-8654 東京都文京区本郷7-3-1 東京大学構内 第二食堂3階6号室',
    ],
  },
  '17': {
    wrong: [],
    correct: ['Tel: 03-5684-4594（公式）/ 03-5841-7977\nFax: 050-3413-4505'],
  },
  '18': {
    wrong: ['A103'],
    correct: [
      '〒153-8902 東京都目黒区駒場3-8-1 東京大学構内 キャンパスプラザA棟1階103号室',
    ],
  },
  '19': {
    wrong: ['TEL: 03-5454-4349'],
    correct: ['Tel: 03-5454-4349'],
  },
  '20': {
    wrong: ['FAX: 03-3466-1865'],
    correct: ['Fax: 03-3466-1865'],
  },
  '21': {
    wrong: [],
    correct: ['Email: contact@gogatsusai.jp'],
  },
  '22': {
    wrong: [],
    correct: ['Email: contact[at]gogatsusai.jp'],
  },
  '23': {
    wrong: ['[at]を@にして', 'スパム防止のため', '迷惑メール防止のため、'],
    correct: ['（[at]を@に変えてご送信ください）'],
  },
  '24': {
    wrong: ['本郷キャンパス', '本郷、弥生キャンパス'],
    correct: ['東京大学 本郷・弥生キャンパス'],
  },
  '25': {
    wrong: [],
    correct: ['公式広報媒体'],
  },
  '26': {
    wrong: [],
    correct: ['公式パンフレット'],
  },
  '27': {
    wrong: ['公式ホームページ', '/公式ウェブページ', '公式Webサイト'],
    correct: ['公式ウェブサイト'],
  },
  '28': {
    wrong: [],
    correct: [],
  },
  '29': {
    wrong: ['公式グッズショップ', 'オンライングッズショップ'],
    correct: ['公式通販サイト'],
  },
  '30': {
    wrong: ['公式Youtube', '五月祭Youtube'],
    correct: ['公式YouTube'],
  },
  '31': {
    wrong: [],
    correct: ['公式SNS'],
  },
  '32': {
    wrong: [],
    correct: ['公式X（旧Twitter）'],
  },
  '33': {
    wrong: [],
    correct: ['公式マスコット「めい」 X（旧Twitter）'],
  },
  '34': {
    wrong: [],
    correct: ['公式マスコット「めい」 Instagram'],
  },
  '35': {
    wrong: [],
    correct: ['公式Facebook'],
  },
  '36': {
    wrong: [],
    correct: ['公式Instagram'],
  },
  '37': {
    wrong: [],
    correct: ['公式LINE'],
  },
  '38': {
    wrong: ['~'],
    correct: ['〜'],
  },
  '39': {
    wrong: [','],
    correct: ['、'],
  },
  '40': {
    wrong: ['.'],
    correct: ['。'],
  },
  '41': {
    wrong: ['…。'],
    correct: ['。'],
  },
  '42': {
    wrong: ['…？'],
    correct: ['？'],
  },
  '43': {
    wrong: ['…！'],
    correct: ['！'],
  },
  '44': {
    wrong: ['位'],
    correct: ['くらい'],
  },
  '45': {
    wrong: ['程'],
    correct: ['ほど'],
  },
  '46': {
    wrong: ['等'],
    correct: ['など'],
  },
  '47': {
    wrong: ['共に'],
    correct: ['ともに'],
  },
  '48': {
    wrong: ['於いて'],
    correct: ['おいて'],
  },
  '49': {
    wrong: ['又は'],
    correct: ['または'],
  },
  '50': {
    wrong: ['或いは'],
    correct: ['あるいは'],
  },
  '51': {
    wrong: ['従って'],
    correct: ['したがって'],
  },
  '52': {
    wrong: ['及び'],
    correct: ['および'],
  },
  '53': {
    wrong: ['貴方'],
    correct: ['あなた'],
  },
  '54': {
    wrong: ['何処'],
    correct: ['どこ'],
  },
  '55': {
    wrong: ['出来る'],
    correct: ['できる'],
  },
  '56': {
    wrong: ['して下さい'],
    correct: ['してください'],
  },
  '57': {
    wrong: ['して頂く'],
    correct: ['していただく'],
  },
  '58': {
    wrong: ['と言う'],
    correct: ['という'],
  },
  '59': {
    wrong: ['構わない'],
    correct: ['かまわない'],
  },
  '60': {
    wrong: ['して良い'],
    correct: ['していい', 'してよい'],
  },
  '61': {
    wrong: ['して欲しい'],
    correct: ['してほしい'],
  },
  '62': {
    wrong: ['受け付け'],
    correct: ['受付'],
  },
  '63': {
    wrong: ['受け取り', '受取り'],
    correct: ['受取'],
  },
  '64': {
    wrong: ['締め切り'],
    correct: ['締切'],
  },
  '65': {
    wrong: ['場所割り'],
    correct: ['場所割'],
  },
  '66': {
    wrong: ['時間割り'],
    correct: ['時間割'],
  },
  '67': {
    wrong: ['控え室'],
    correct: ['控室'],
  },
  '68': {
    wrong: ['日付け'],
    correct: ['日付'],
  },
  '69': {
    wrong: ['振り込み'],
    correct: ['振込'],
  },
  '70': {
    wrong: ['見積もり'],
    correct: ['見積'],
  },
  '71': {
    wrong: ['来場客', 'お客様', 'お客さま'],
    correct: ['来場者'],
  },
  '72': {
    wrong: ['来場客', 'お客様', 'お客さま', '来場者さん'],
    correct: ['ご来場の皆さま'],
  },
  '73': {
    wrong: ['皆様', 'みなさん', 'みなさま'],
    correct: ['皆さま'],
  },
  '74': {
    wrong: ['子供', 'お子様'],
    correct: ['子ども'],
  },
  '75': {
    wrong: ['お子様', '子供'],
    correct: ['お子さま'],
  },
  '76': {
    wrong: ['ゴミ', '廃棄物'],
    correct: ['ごみ'],
  },
  '77': {
    wrong: ['車椅子'],
    correct: ['車いす'],
  },
  '78': {
    wrong: ['2次元コード', 'QRコード'],
    correct: ['二次元コード'],
  },
  '79': {
    wrong: ['領収証'],
    correct: ['領収書'],
  },
  '80': {
    wrong: ['法被'],
    correct: ['はっぴ'],
  },
  '81': {
    wrong: ['(?<!お)祭り'],
    correct: ['お祭り', '祭'],
  },
  '82': {
    wrong: ['文化祭', '学祭'],
    correct: ['学園祭'],
  },
  '83': {
    wrong: ['Base'],
    correct: ['BASE'],
  },
  '84': {
    wrong: ['ディスコード'],
    correct: ['Discord'],
  },
  '85': {
    wrong: ['グーグルミート'],
    correct: ['Google Meet'],
  },
  '86': {
    wrong: ['グーグルフォーム'],
    correct: ['Google フォーム'],
  },
  '87': {
    wrong: ['インスタグラム', 'instagram'],
    correct: ['Instagram'],
  },
  '88': {
    wrong: [],
    correct: ['STORES'],
  },
  '89': {
    wrong: ['tiktok', 'Tiktok'],
    correct: ['TikTok'],
  },
  '90': {
    wrong: [],
    correct: ['Twitch'],
  },
  '91': {
    wrong: [],
    correct: ['X（旧Twitter）'],
  },
  '92': {
    wrong: ['zoom'],
    correct: ['Zoom'],
  },
  '93': {
    wrong: ['Youtube', 'ユーチューブ'],
    correct: ['YouTube'],
  },
  '94': {
    wrong: ['ユーチューブライブ', 'Youtubeライブ'],
    correct: ['YouTube Live'],
  },
  '95': {
    wrong: ['zoom会議'],
    correct: ['Zoomミーティング'],
  },
  '96': {
    wrong: ['ニコ生'],
    correct: ['ニコニコ生放送'],
  },
  '97': {
    wrong: [],
    correct: ['Teams'],
  },
  '98': {
    wrong: ['グーグルドライブ', 'Googleドライブ', 'google drive'],
    correct: ['Google ドライブ'],
  },
  '99': {
    wrong: ['挨拶'],
    correct: ['あいさつ'],
  },
  '100': {
    wrong: ['上がる'],
    correct: ['あがる'],
  },
  '101': {
    wrong: ['上げる'],
    correct: ['あげる'],
  },
  '102': {
    wrong: ['当たり'],
    correct: ['あたり'],
  },
  '103': {
    wrong: ['あたりまえ'],
    correct: ['当たり前'],
  },
  '104': {
    wrong: ['当てはまる'],
    correct: ['あてはまる'],
  },
  '105': {
    wrong: ['貴方'],
    correct: ['あなた'],
  },
  '106': {
    wrong: ['予め'],
    correct: ['あらかじめ'],
  },
  '107': {
    wrong: ['あらためて'],
    correct: ['改めて'],
  },
  '108': {
    wrong: ['有り難う', '有難う'],
    correct: ['ありがとう'],
  },
  '109': {
    wrong: ['有り'],
    correct: ['あり'],
  },
  '110': {
    wrong: ['有る', '在る'],
    correct: ['ある'],
  },
  '111': {
    wrong: ['あわせて'],
    correct: ['併せて'],
  },
  '112': {
    wrong: ['と言う'],
    correct: ['という'],
  },
  '113': {
    wrong: ['致します'],
    correct: ['いたします'],
  },
  '114': {
    wrong: ['戴く'],
    correct: ['頂く'],
  },
  '115': {
    wrong: ['頂く'],
    correct: ['いただく'],
  },
  '116': {
    wrong: ['至る', '到る'],
    correct: ['いたる'],
  },
  '117': {
    wrong: ['色々'],
    correct: ['いろいろ'],
  },
  '118': {
    wrong: ['の上、'],
    correct: ['のうえ、'],
  },
  '119': {
    wrong: ['概ね'],
    correct: ['おおむね'],
  },
  '120': {
    wrong: ['凡そ'],
    correct: ['おおよそ'],
  },
  '121': {
    wrong: ['お勧め', 'お薦め'],
    correct: ['おすすめ'],
  },
  '122': {
    wrong: ['恐らく'],
    correct: ['おそらく'],
  },
  '123': {
    wrong: ['行なう'],
    correct: ['行う'],
  },
  '124': {
    wrong: ['お話し'],
    correct: ['お話'],
  },
  '125': {
    wrong: ['かかわる'],
    correct: ['関わる'],
  },
  '126': {
    wrong: ['かんする'],
    correct: ['関する'],
  },
  '127': {
    wrong: ['箇所', 'カ所', 'ヶ所'],
    correct: ['か所'],
  },
  '128': {
    wrong: ['箇月', 'カ月', 'ヶ月'],
    correct: ['か月'],
  },
  '129': {
    wrong: ['かならず'],
    correct: ['必ず'],
  },
  '130': {
    wrong: ['構いません'],
    correct: ['かまいません'],
  },
  '131': {
    wrong: ['気づく'],
    correct: ['気付く'],
  },
  '132': {
    wrong: ['て下さい'],
    correct: ['てください'],
  },
  '133': {
    wrong: ['くわしい'],
    correct: ['詳しい'],
  },
  '134': {
    wrong: ['こうむる'],
    correct: ['被る'],
  },
  '135': {
    wrong: ['越える'],
    correct: ['超える'],
  },
  '136': {
    wrong: ['ご存知'],
    correct: ['ご存じ'],
  },
  '137': {
    wrong: ['事'],
    correct: ['こと'],
  },
  '138': {
    wrong: ['ことなる'],
    correct: ['異なる'],
  },
  '139': {
    wrong: ['毎'],
    correct: ['ごと'],
  },
  '140': {
    wrong: ['ころ'],
    correct: ['頃'],
  },
  '141': {
    wrong: ['様々'],
    correct: ['さまざま'],
  },
  '142': {
    wrong: ['従って'],
    correct: ['したがって'],
  },
  '143': {
    wrong: ['充分'],
    correct: ['十分'],
  },
  '144': {
    wrong: ['既に'],
    correct: ['すでに'],
  },
  '145': {
    wrong: ['全て'],
    correct: ['すべて'],
  },
  '146': {
    wrong: ['すむ'],
    correct: ['済む'],
  },
  '147': {
    wrong: ['製作'],
    correct: ['制作'],
  },
  '148': {
    wrong: ['是非'],
    correct: ['ぜひ'],
  },
  '149': {
    wrong: ['沢山'],
    correct: ['たくさん'],
  },
  '150': {
    wrong: ['出す'],
    correct: ['だす'],
  },
  '151': {
    wrong: ['訊ねる', '尋ねる'],
    correct: ['たずねる'],
  },
  '152': {
    wrong: ['但し'],
    correct: ['ただし'],
  },
  '153': {
    wrong: ['たび'],
    correct: ['度'],
  },
  '154': {
    wrong: ['為'],
    correct: ['ため'],
  },
  '155': {
    wrong: ['近付く'],
    correct: ['近づく'],
  },
  '156': {
    wrong: ['造る'],
    correct: ['つくる', '作る'],
  },
  '157': {
    wrong: ['繋がり'],
    correct: ['つながり'],
  },
  '158': {
    wrong: ['出来る'],
    correct: ['できる'],
  },
  '159': {
    wrong: ['とおり'],
    correct: ['通り'],
  },
  '160': {
    wrong: ['時(?=[のはをにで、])'],
    correct: ['とき'],
  },
  '161': {
    wrong: ['とくに'],
    correct: ['特に'],
  },
  '162': {
    wrong: ['共に'],
    correct: ['ともに'],
  },
  '163': {
    wrong: ['無い'],
    correct: ['ない'],
  },
  '164': {
    wrong: ['馴染み'],
    correct: ['なじみ'],
  },
  '165': {
    wrong: ['等'],
    correct: ['など'],
  },
  '166': {
    wrong: ['に当たり'],
    correct: ['にあたり'],
  },
  '167': {
    wrong: ['に於いて'],
    correct: ['において'],
  },
  '168': {
    wrong: ['に過ぎない'],
    correct: ['にすぎない'],
  },
  '169': {
    wrong: ['の程'],
    correct: ['のほど'],
  },
  '170': {
    wrong: ['はじめる'],
    correct: ['始める'],
  },
  '171': {
    wrong: ['はじまる'],
    correct: ['始まる'],
  },
  '172': {
    wrong: ['を始め'],
    correct: ['をはじめ'],
  },
  '173': {
    wrong: ['果たして'],
    correct: ['はたして'],
  },
  '174': {
    wrong: ['ひとつひとつ'],
    correct: ['一つひとつ'],
  },
  '175': {
    wrong: ['ひと時', '一時'],
    correct: ['ひととき'],
  },
  '176': {
    wrong: ['ひとりひとり'],
    correct: ['一人ひとり'],
  },
  '177': {
    wrong: ['相応しい'],
    correct: ['ふさわしい'],
  },
  '178': {
    wrong: ['ふれる'],
    correct: ['触れる'],
  },
  '179': {
    wrong: ['の他'],
    correct: ['のほか'],
  },
  '180': {
    wrong: ['て欲しい'],
    correct: ['てほしい'],
  },
  '181': {
    wrong: ['又は'],
    correct: ['または'],
  },
  '182': {
    wrong: ['まったく'],
    correct: ['全く'],
  },
  '183': {
    wrong: ['迄'],
    correct: ['まで'],
  },
  '184': {
    wrong: ['回る'],
    correct: ['まわる'],
  },
  '185': {
    wrong: ['みどころ'],
    correct: ['見どころ'],
  },
  '186': {
    wrong: ['巡る'],
    correct: ['めぐる'],
  },
  '187': {
    wrong: ['以って'],
    correct: ['もって'],
  },
  '188': {
    wrong: ['持つ'],
    correct: ['もつ'],
  },
  '189': {
    wrong: ['もっとも'],
    correct: ['最も'],
  },
  '190': {
    wrong: ['やむをえず'],
    correct: ['やむを得ず'],
  },
  '191': {
    wrong: ['止める'],
    correct: ['やめる'],
  },
  '192': {
    wrong: ['良い'],
    correct: ['よい'],
  },
  '193': {
    wrong: ['の様'],
    correct: ['のよう'],
  },
  '194': {
    wrong: ['わかる'],
    correct: ['分かる'],
  },
  '195': {
    wrong: ['わける'],
    correct: ['分ける'],
  },
};
