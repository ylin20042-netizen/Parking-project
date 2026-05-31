# Guangzhou Monthly Parking Platform

一个面向广州长期停车和月保车位信息展示的开源静态网站项目。

This is an open-source static website for displaying long-term and monthly parking availability in Guangzhou.

## Features

- Parking lot listing powered by JSON data
- Search by parking lot name or area
- Filter by district
- Display monthly price and available spaces
- Contact form for parking inquiries
- GitHub Pages ready

## Project Structure

```text
Parking-project/
├── index.html
├── style.css
├── script.js
├── data/
│   └── parking.json
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── .gitignore
```

## How to Add a New Parking Space

Edit `data/parking.json` and add a new item:

```json
{
  "id": 4,
  "name": "New Parking Lot Name",
  "area": "Tianhe District",
  "type": "Indoor Parking",
  "monthlyPrice": 399,
  "availableSpaces": 10,
  "suitableFor": "Long-term parking",
  "description": "Short description of the parking lot."
}
```

After editing, commit the change to GitHub. GitHub Pages will update automatically.

## Deployment

1. Upload all files to a public GitHub repository.
2. Go to **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose `main` and `/ (root)`.
5. Save and wait for the website URL.

## Notes

If you open `index.html` directly on your computer, some browsers may block loading `data/parking.json`. For best results, deploy it to GitHub Pages or use a local server.

## License

MIT License.
