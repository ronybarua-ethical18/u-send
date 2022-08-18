import { Button, Typography } from '@mui/material'
import HomeImage from '../../../assets/homeimage.png'
import Chart from '../../../assets/chart.png'

export default function Welcome() {
  return (
    <div style={{display: 'flex', width: '100%', marginTop: '2em'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', width: '60%'}}>
            <div>
            <Typography variant="h5" component="h5" sx={{fontWeight: '600', color: '#212B36', marginTop: '1em'}}>
                Welcome Back Pattrick Leach
            </Typography>
            <Typography variant="subtitle1" sx={{fontWeight: '400', color: '#212B36', fontSize: '16px'}}>
                Lets get back to work.
            </Typography>
            <Typography variant="body1" sx={{fontWeight: '400', color: '#212B36', fontSize: '12px', marginTop: '2em'}}>
                You can view and manage all of your orders and track them.
            </Typography>
            <Typography variant="body1" sx={{fontWeight: '400', color: '#212B36', fontSize: '12px', marginBottom: '2em'}}>
            Lets bring up your business to next level
            </Typography>
            <Button variant="contained"
                sx={{
                    height: '35px',
                    backgroundColor: '#3366FF'
                }}>
                View Orders
            </Button>
            </div>
            <div>
                <img src={HomeImage} alt=''/>
            </div>
        </div>
        <div>
            <img src={Chart} alt=''/>
        </div>
    </div>
  )
}
