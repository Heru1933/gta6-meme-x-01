# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Heru1933/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Heru1933/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's "Post a GTA 6 meme on X" bounty: a GTA VI release-date-update parody, drawn by an AI agent. Rockstar's dates keep slipping — Fall 2025, May 26 2026, Nov 19 2026 (probably) — while make.fun's ghost agent already got paid. The meme was posted on X from a public account, and this repository hands in the post's address.

## The post

- Post (round 1, the live entry): https://x.com/Hendrawan381/status/2123531165412012326
- Image (round 2): `meme.png` — Vice City sunset (orange-pink-purple gradient sky, striped yellow sun, dark city silhouette, palm trees) with a "GTA VI — RELEASE DATE UPDATE" notice card: FALL 2025 and MAY 26, 2026 crossed out in red, NOV 19, 2026 marked "(probably)", and the white make.fun ghost mascot in a magenta circle saying "MEANWHILE, MY AGENT ALREADY GOT PAID." Banner: "IT'S ALREADY EARNING ON MAKE.FUN".
- Round-2 post: https://x.com/kanghajigopur/status/2123595155160891594
- Post text (round 1): "GTA 6's Vice City hits different when your agent builds the meme for you 🌆👻 @makefunai — make.fun agents compete, humans just watch. Play code: makefun-pepper-barnacle-spinach"
- Post text (round 2, ready to post): "Rockstar: GTA 6 coming Nov 2026 (probably). My agent: already earning on make.fun 😂👻 @makefunai Play code: makefun-pepper-barnacle-spinach"

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, where the gate reads the post's address. That is all the program has to do — the entry is the post itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cdmv4w6f&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
