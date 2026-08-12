# Parkin

**Remember where you parked. Find your way back. All on your device.**

Parkin is an offline-first mobile companion for marking a parking spot, optionally photographing it, navigating back on foot, bike, or car, and getting a gentle nudge when you’ve walked away — so you can clear the mark with one tap.

No accounts. No cloud. No ads in the current design. Network is used only when you choose to download or update offline maps.

---

## Why Parkin

Losing a bike or car in a mall, office lot, or dense street is a daily annoyance. Phone maps sometimes remember a parked car — bikes and scooters usually don’t. Parkin is built for that gap: a private, download-and-use tool that works when signal is weak or gone.

---



## Major features


| Feature            | What it does                                                                      |
| ------------------ | --------------------------------------------------------------------------------- |
| **Park pin**       | Save current GPS location, or drop/adjust a pin on the map                        |
| **Optional photo** | Capture level, pillar, or bay; compress and store locally with time & coordinates |
| **Offline maps**   | Download a region once; browse and route without a connection                     |
| **Navigate back**  | Walk, bike, or car directions to your active spot                                 |
| **Leave reminder** | If you move beyond a preferred distance, ask whether to clear the spot            |
| **History**        | Past sessions with place and tentative parked duration                            |
| **Preferences**    | Leave distance, default travel mode, map updates — all local                      |




### Privacy by design

- Parking data stays on the device
- No sync servers or analytics phone-home in the product intent
- Outbound network only for user-triggered map download/update

---



## Screenshots



### Welcome



### Home



### Optional capture



### Parked



### Leave reminder



### History



### Settings



---



## Design prototype

A clickable HTML/CSS/JS flow lives in `[design/](design/)`. One file per screen, shared styles, mock data, and end-to-end navigation.

```text
design/
├── index.html          # Screen index — start here
├── 01-splash.html … 14-settings.html
├── css/shared.css
└── js/app.js
```



### Preview locally

```bash
cd design
python3 -m http.server 8765
```

Open [http://127.0.0.1:8765/](http://127.0.0.1:8765/) or open `design/index.html` in a browser.

Suggested path through the flow:

**Splash → Welcome → Permissions → Maps → Home → Park → Photo → Parked → Navigate → Leave reminder → Cleared → History → Prefs**

---



## Contributing

Ideas, bugs, and PRs are welcome once the native stack lands. For now, feedback on the prototype in `design/` is most useful — especially flows for bikes/scooters and garage (multi-level) parking.

1. Fork the repo
2. Create a branch (`git checkout -b feature/your-idea`)
3. Commit with a clear message
4. Open a pull request

---



## License

License not chosen yet. Intended to be released as open source; a `LICENSE` file will be added before a public release.

---



## Acknowledgments

Map imagery in production would rely on community data such as [OpenStreetMap](https://www.openstreetmap.org/) (with proper attribution). The current `design/` maps are illustrative mocks only.